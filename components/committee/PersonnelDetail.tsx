"use client";

import useCommitteeByCat from "./hook/useCommitteeByCat";
import CategoryCard from "./CategoryCard";
import { CommitteeMember } from "@/utils/types";

export default function PersonnelDetail({ catId }: { catId: string }) {
  const { data } = useCommitteeByCat(catId); // Replace with actual catId

  if (!data || data.length === 0) {
    return <p>No Data</p>;
  }

  return (
    <div className="space-y-10">
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
      <div className="grid grid-cols-2 md:grid-cols-5">
        {data.map((item: CommitteeMember) => {
          if (
            item.level === 3 ||
            item.level === 4 ||
            item.level === 6 ||
            item.level === 7 ||
            item.level === 8
          ) {
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
      <div className={`hidden md:grid grid-cols-2 md:grid-cols-5 `}>
        <div className="md:space-y-0 md:flex md:flex-col md:items-center md:justify-start md:gap-10 ">
          {data.map((item: CommitteeMember) => {
            if (item.level === 9) {
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
        <div className="md:space-y-0 md:flex md:flex-col md:items-center md:justify-start md:gap-10 ">
          {data.map((item: CommitteeMember) => {
            if (item.level === 10) {
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
        <div className="md:space-y-0 md:flex md:flex-col md:items-center md:justify-start md:gap-10 ">
          {data.map((item: CommitteeMember) => {
            if (item.level === 12) {
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
        <div className="md:space-y-0 md:flex md:flex-col md:items-center md:justify-start md:gap-10 ">
          {data.map((item: CommitteeMember) => {
            if (item.level === 13) {
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
        <div className="md:space-y-0 md:flex md:flex-col md:items-center md:justify-start md:gap-10 ">
          {data.map((item: CommitteeMember) => {
            if (item.level === 14) {
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

      <div className={`grid grid-cols-2 gap-2.5 md:hidden`}>
        {data.map((item: CommitteeMember) => {
          if (
            item.level === 9 ||
            item.level === 10 ||
            item.level === 12 ||
            item.level === 13 ||
            item.level === 14
          ) {
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
