import { useState } from "react";
import { Environment, RelayEnvironmentProvider } from "react-relay";
import { Store, RecordSource, Network, FetchFunction } from "relay-runtime";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";
import fetch from "cross-fetch";

export const relayFetchFunction: FetchFunction = async (request, variables) => {
  return fetch(`http://localhost:3000/query`, {
    method: "POST",
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const createRelayEnvironment = (): Environment =>
  new RelayModernEnvironment({
    store: new Store(new RecordSource({})),
    network: Network.create(relayFetchFunction),
  });

export function RelayProvider({ children }: { children: JSX.Element }) {
  const [relayEnvironment] = useState(() => createRelayEnvironment());

  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      {children}
    </RelayEnvironmentProvider>
  );
}
