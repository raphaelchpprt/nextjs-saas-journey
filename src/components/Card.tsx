'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ReactNode, FC, createContext, useContext } from 'react';

type CardVariant = 'default' | 'highlighted' | 'danger';

interface CardContextValue {
  variant: CardVariant;
}

const CardContext = createContext<CardContextValue>({
  variant: 'default',
});

const useCardContext = () => useContext(CardContext);

const cardVariants = cva(
  'rounded-lg border transition-all duration-200 shadow-md hover:shadow-lg',
  {
    variants: {
      variant: {
        default: 'bg-gray-800 border border-gray-700 text-white',
        highlighted:
          'bg-gradient-to-r from-cyan-500 to-blue-500 border-cyan-500 text-white shadow-lg ring-1 ring-cyan-500',
        danger: 'bg-red-800 border border-red-700 text-red-100',
      },
      size: {
        sm: 'p-3',
        md: 'p-4 md:p-6',
        lg: 'p-6 md:p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const CardHeaderVariants = cva('border-b pb-3 mb-4', {
  variants: {
    variant: {
      default: 'border-gray-700',
      highlighted: 'border-cyan-300',
      danger: 'border-red-300',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
}

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, variant, size, className }) => {
  const finalVariant: CardVariant = (variant as CardVariant) ?? 'default';

  return (
    <CardContext.Provider value={{ variant: finalVariant }}>
      <div className={cn(cardVariants({ variant, size }), className)}>
        {children}
      </div>
    </CardContext.Provider>
  );
};

export const CardHeader: FC<CardHeaderProps> = ({
  children,
  variant: variantOverride,
  className,
}) => {
  const { variant: contextVariant } = useCardContext();

  const finalVariant = variantOverride ?? contextVariant;

  return (
    <div
      className={cn(CardHeaderVariants({ variant: finalVariant }), className)}
    >
      {children}
    </div>
  );
};

export const CardBody: FC<CardBodyProps> = ({ children, className }) => {
  return <div className={cn('py-4 px-6', className)}>{children}</div>;
};

export const CardFooter: FC<CardFooterProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'border-t border-gray-700 pt-3 mt-4 flex justify-end space-x-2',
        className
      )}
    >
      {children}
    </div>
  );
};
