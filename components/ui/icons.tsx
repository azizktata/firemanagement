export function ArrowIcon({ size = 10 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 9L9 1M3 1h6v6" />
    </svg>
  );
}

export function ChevronIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 5h8M5 1l4 4-4 4" />
    </svg>
  );
}