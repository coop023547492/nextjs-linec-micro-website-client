"use client";

import { committeeMenuItems } from "@/utils/constants";
import useCommitteeByCat from "./hook/useCommitteeByCat";
import CategoryCard from "./CategoryCard";
import { CommitteeMember } from "@/utils/types";

export default function CategoryDetail({ catId }: { catId: string }) {
  const { data } = useCommitteeByCat(catId); // Replace with actual catId

  if (!data || data.length === 0) {
    return <p>No Data</p>;
  }
  const catName = committeeMenuItems.find(
    (item) => item.href === `/committee/${catId}`
  )?.text;

  return (
    <div className="space-y-10">
      <h2 className="text-center Main-dark-Blue text-xl font-bold">
        {catName}
      </h2>
      <div className="flex justify-center items-center">
        {data.map((item: CommitteeMember) => {
          if (item.level === 1) {
            return (
              <CategoryCard
                key={item.id}
                img={item.image}
                name={item.name}
                position={item.position}
              />
            );
          }
        })}
      </div>
      <div className="flex justify-center items-center md:gap-28">
        {data.map((item: CommitteeMember) => {
          if (item.level === 2) {
            return (
              <CategoryCard
                key={item.id}
                img={item.image}
                name={item.name}
                position={item.position}
              />
            );
          }
        })}
      </div>
      <div
        className={`grid gap-10 ${
          data.filter((item: CommitteeMember) => item.level === 3).length < 5
            ? "grid-cols-2 md:flex md:justify-center md:gap-10"
            : "grid-cols-2 md:grid-cols-5"
        }`}
      >
        {data.map((item: CommitteeMember) => {
          if (item.level === 3) {
            return (
              <CategoryCard
                key={item.id}
                img={item.image}
                name={item.name}
                position={item.position}
                type="member"
              />
            );
          }
        })}
      </div>
      <div className="flex justify-center items-center gap-10 md:gap-28">
        {data.map((item: CommitteeMember) => {
          if (item.level === 4 || item.level === 5) {
            return (
              <CategoryCard
                key={item.id}
                img={item.image}
                name={item.name}
                position={item.position}
                type="member"
              />
            );
          }
        })}
      </div>
    </div>
  );
}
