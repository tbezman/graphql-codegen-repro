import { render } from "@testing-library/react";
import { Suspense } from "react";
import { RelayProvider } from "../RelayEnvironment";
import { SomeComponent } from "./SomeComponent";
import nock from "nock";
import { graphql, useLazyLoadQuery } from "react-relay";
import { SomeComponentTestQuery } from "../__generated__/SomeComponentTestQuery.graphql";
import { SomeComponentTestQueryQuery } from "../__generated__/operations";

const Fixture = () => {
  const query = useLazyLoadQuery<SomeComponentTestQuery>(
    graphql`
      query SomeComponentTestQuery {
        ...SomeComponentFragment
      }
    `,
    {}
  );

  return <SomeComponent queryRef={query} />;
};

describe("SomeComponent", () => {
  it("can render", async () => {
    const response: SomeComponentTestQueryQuery = {
      post: {
        title: "Some Title",
      },
    };

    nock("http://localhost:3000").post("/query").reply(200, {
      data: response,
    });

    const { findByText } = render(
      <RelayProvider>
        <Suspense fallback={null}>
          <Fixture />
        </Suspense>
      </RelayProvider>
    );

    await findByText("Title: Some Title");
  });
});
