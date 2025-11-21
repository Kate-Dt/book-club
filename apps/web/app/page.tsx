import { Club } from "@bc/core";
import { ClientButtonWrapper } from "./components/wrappers/ClientButtonWrapper";

export default async function Page() {
  const club: Club = {
    id: "1",
    name: "Literary Club",
    languages: ["uk"],
    hosts: ["katya"],
    membersCount: 1,
  };
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Book Club</h1>
      <p className="text-sm opacity-80">
        Languages: {club.languages.join(",")}
      </p>
       <ClientButtonWrapper>Click</ClientButtonWrapper>
    </main>
  );
}
