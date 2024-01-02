"use client";
import algoliasearch from "algoliasearch/lite";
import Search from "@/components/Search";
import { InstantSearchNext } from "react-instantsearch-nextjs";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!,
);

const OuterAccommodationSearch = () => {
  return (
    <InstantSearchNext searchClient={searchClient} indexName="Accommodations">
      <Search />
    </InstantSearchNext>
  );
};

export default OuterAccommodationSearch;
