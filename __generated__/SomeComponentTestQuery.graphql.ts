/**
 * @generated SignedSource<<890518c1b6fd05c6ca5ff6c44bd57eed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SomeComponentTestQuery$variables = {};
export type SomeComponentTestQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SomeComponentFragment">;
};
export type SomeComponentTestQuery = {
  variables: SomeComponentTestQuery$variables;
  response: SomeComponentTestQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SomeComponentTestQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "SomeComponentFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SomeComponentTestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "post",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "37b9dca7731a937528446e21f72a6f72",
    "id": null,
    "metadata": {},
    "name": "SomeComponentTestQuery",
    "operationKind": "query",
    "text": "query SomeComponentTestQuery {\n  ...SomeComponentFragment\n}\n\nfragment SomeComponentFragment on Query {\n  post {\n    title\n    id\n  }\n}\n"
  }
};

(node as any).hash = "0d3bef1c66356c157d6048eeca715f0f";

export default node;
