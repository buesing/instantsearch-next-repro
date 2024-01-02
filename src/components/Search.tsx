import { useRefinementList } from "react-instantsearch";
const Search = () => {
  const { items: features } = useRefinementList({
    attribute: "features.id",
    sortBy: ["isRefined", "name"],
    limit: 100,
  });
  const { items: surroundings } = useRefinementList({
    attribute: "surroundings.id",
    sortBy: ["isRefined", "name"],
    limit: 100,
  });
  console.log(features, surroundings);
  return (
    <div>
      <pre>{JSON.stringify({ features, surroundings }, null, 2)}</pre>
    </div>
  );
};

export default Search;
