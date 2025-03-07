import { cn } from "@/lib/utils"
import React from "react"

export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> { }

const VisuallyHidden = React.forwardRef<HTMLSpanElement, VisuallyHiddenProps>(({ className, ...props }, ref) => {
    return (
        <span
            ref={ref}
            className={cn(
                "absolute h-[1px] w-[1px] overflow-hidden whitespace-nowrap p-0",
                "border-0",
                "m-[-1px]",
                "clip-[rect(0,0,0,0)]",
                "clip-path-[inset(100%)]",
                className,
            )}
            {...props}
        />
    )
})
VisuallyHidden.displayName = "VisuallyHidden"

export { VisuallyHidden }

