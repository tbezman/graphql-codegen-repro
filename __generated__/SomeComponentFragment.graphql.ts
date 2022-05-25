/**
 * @generated SignedSource<<55ddd839af015ba74c9075d35544cd8e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SomeComponentFragment$data = {
  readonly post: {
    readonly title: string | null;
  } | null;
  readonly " $fragmentType": "SomeComponentFragment";
};
export type SomeComponentFragment$key = {
  readonly " $data"?: SomeComponentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SomeComponentFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SomeComponentFragment",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "443a6619207db79659427495f56ce226";

export default node;
