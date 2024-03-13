'use client'

import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
const pokemonTypes = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
    "Stellar"
];
const SearchButton = ({ href }: any) => {
    return (
        <a
            href={href}
            className="mt-[0px]"
        >
            <Button>
                <Search className="mr-2 h-5 w-5 text-white" /> <p className="text-md font-semibold leading-5">Search</p>
            </Button>
        </a>

    )
}


const TeamBuildingForm = () => {
    const [selectedValue, setSelectedValue] = useState([]);
    const [selectedMembers, setSelectedMembers] = useState("1");

    const handleSelectMembers = (event: any) => {
        setSelectedMembers(event);
    };

    const handleSelectChange = (value: any) => {
        setSelectedValue((prevSelectedMembers: any) => {
            if (prevSelectedMembers.includes(value)) {
                // Si el valor ya está seleccionado, lo quitamos
                return prevSelectedMembers.filter((member: any) => member !== value);
            } else {
                // Si el valor no está seleccionado, lo agregamos
                return [...prevSelectedMembers, value];
            }
        });
    };

    return (
        <div className="w-full gap-4 flex items-center justify-center">
            <Select onValueChange={handleSelectChange} value={selectedValue.join(",")}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="types">
                        {selectedValue.join(', ')}
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Types</SelectLabel>
                        {
                            pokemonTypes.map((type) => (
                                <SelectItem value={type}>{type}</SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select onValueChange={handleSelectMembers} value={selectedMembers}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Days" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Members</SelectLabel>
                        <SelectItem value={"1"}>{1}</SelectItem>
                        <SelectItem value={"2"}>{2}</SelectItem>
                        <SelectItem value={"3"}>{3}</SelectItem>
                        <SelectItem value={"4"}>{4}</SelectItem>
                        <SelectItem value={"5"}>{5}</SelectItem>
                        <SelectItem value={"6"}>{6}</SelectItem>
                        <SelectItem value={"7"}>{7}</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <SearchButton href={`/team?types=${selectedValue}&members=${selectedMembers}`} />
        </div>
    );
};


const PokemonSearchBar = () => {
    return (
        <div className="max-w-xl mx-auto h-auto rounded p-4">
            <Tabs defaultValue="team" className="w-full">
                <TabsList className="grid w-full grid-cols-1">
                    <TabsTrigger value="team">Team Builder</TabsTrigger>
                </TabsList>
                <TabsContent value="team">
                    <TeamBuildingForm />
                </TabsContent>
            </Tabs>
        </div>
    )
}
export default PokemonSearchBar