import { ReactNode } from 'react'
import { View, ViewProps } from 'react-native'
import { cva, VariantProps } from "class-variance-authority"
import { cn } from 'lib/cn';
const variants = cva(
  [
  ],
  {
    variants: {
      containing: {
        center: "flex items-center justify-center",
        containe: "flex"
      }
    },
    defaultVariants: {
      containing: "containe"
    }
  }
)

type ContainerProps = {
  children: ReactNode;

} & ViewProps & VariantProps<typeof variants>
const Container = ({ containing, children, className, ...rest }: ContainerProps) => {
  return (
    <View className={cn(variants({ containing, className, }))} {...rest}>
      {children}
    </View>
  )
}

export default Container