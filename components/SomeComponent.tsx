import { graphql, useFragment } from "react-relay";
import { SomeComponentFragment$key } from "../__generated__/SomeComponentFragment.graphql";

export function SomeComponent({
  queryRef,
}: {
  queryRef: SomeComponentFragment$key;
}) {
  const { post } = useFragment(
    graphql`
      fragment SomeComponentFragment on Query {
        post {
          title
        }
      }
    `,
    queryRef
  );

  return <div>Title: {post.title}</div>;
}
