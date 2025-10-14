export function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    setNow(new Date());
    return () => clearInterval(interval);
  }, []);

  if (!now) return null;

  const date = now.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <time className="font-mono text-[11px] uppercase tracking-[0.45em] text-white/60">
      {`${date.toUpperCase()} — ${time}`}
    </time>
  );
}