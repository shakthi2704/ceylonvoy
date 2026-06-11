import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'outline-white'
    | 'ghost'
    | 'gold';

export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonVariantsProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}

export function buttonVariants({
    variant = 'primary',
    size = 'md',
    className,
}: ButtonVariantsProps = {}) {
    return cn(
        // Base
        'inline-flex items-center justify-center font-semibold transition-all duration-200',
        'cursor-pointer whitespace-nowrap',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-primary focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',

        // Variants
        variant === 'primary' &&
        'bg-emerald-primary text-white hover:bg-emerald-dark active:scale-[0.98]',
        variant === 'secondary' &&
        'border border-emerald-primary text-emerald-primary hover:bg-emerald-primary hover:text-white',
        variant === 'outline-white' &&
        'border border-white text-white hover:bg-white hover:text-emerald-primary',
        variant === 'ghost' &&
        'text-heading hover:text-emerald-primary hover:bg-emerald-primary/5',
        variant === 'gold' &&
        'bg-gold-accent text-white hover:bg-emerald-dark active:scale-[0.98]',

        // Sizes
        size === 'sm' && 'text-sm px-4 py-2 rounded-lg gap-1.5',
        size === 'md' && 'text-sm px-5 py-2.5 rounded-lg gap-2',
        size === 'lg' && 'text-base px-8 py-4 rounded-xl gap-2',

        className
    );
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={buttonVariants({ variant, size, className })}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button };