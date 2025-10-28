import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Props = React.PropsWithChildren<{
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}>;

export function Section({ className, as: Tag = "section", children }: Props) {
  return (
    <Tag className={cn("py-12 sm:py-16 lg:py-20", className)}>
      <Container>{children}</Container>
    </Tag>
  );
}



