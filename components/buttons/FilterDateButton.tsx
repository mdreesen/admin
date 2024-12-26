import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { rangeOptions } from "@/lib/rangeOptions";

export const FilterDateButton = () => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button>Select Range</button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                {Object.entries(rangeOptions).map(([key, value]) => (
                    <DropdownMenuItem 
                    key={key}
                    onClick={() => {
                        console.log('hi')
                    }}
                    >
                        {value.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}