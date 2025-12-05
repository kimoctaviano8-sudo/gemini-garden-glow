const ProgressIndicator = () => {
  return (
    <div className="space-y-3 animate-fade-in-up animation-delay-400">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Progress</span>
        <span>Almost there...</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent rounded-full animate-shimmer" />
      </div>
    </div>
  );
};

export default ProgressIndicator;
