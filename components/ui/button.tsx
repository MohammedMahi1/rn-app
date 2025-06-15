import { cn } from '@/lib/cn'
import { cva, VariantProps } from 'class-variance-authority'
import React, { ReactNode } from 'react'
import { ButtonProps, Pressable, PressableProps, Text, useColorScheme, ViewProps } from 'react-native'
import { Label } from './typographie'
import { twMerge } from 'tailwind-merge'
import { Link, LinkProps } from 'expo-router'



const variants = cva(
    [
        "py-4",
        "px-10",
        "w-full",
        "rounded-xl",
        "flex",
        "items-center",
        "justify-center",
    ],
    {
        variants: {
            variant: {
                contain: ["dark:bg-white dark:text-black bg-black text-white", "border-transparent"],
                outline: ["border-black dark:border-white", "border-2 bg-transparent"]
            },
        },
        defaultVariants: {
            variant: "contain",
        }
    }
)

type UiButtonProps = {
    children: ReactNode;
} & PressableProps & VariantProps<typeof variants>

const Button = ({ variant, children, ...rest }: UiButtonProps) => {
    const handlerColorScheme = () => {
        if (variant === 'contain' || variant === undefined || variant === null) {
            return "dark:text-black text-white";
        } else {
            return "dark:text-white text-black"
        }
    }
    return (
        <Pressable className={cn(variants({ variant }))} {...rest}>
            <Text className={twMerge(handlerColorScheme(), "text-2xl font-semibold")}>
                {children}
            </Text>
        </Pressable>
    )
}

export default Button