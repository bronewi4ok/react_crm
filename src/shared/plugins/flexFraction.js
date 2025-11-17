export default function ({ matchUtilities }) {
  matchUtilities({
    flex: (value) => {
      if (typeof value === 'string' && value.includes('/')) {
        const [numerator, denominator] = value.split('/').map(Number);
        if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
          const percentage = (numerator / denominator) * 100;
          return {
            'min-width': '0',
            'flex': `1 1 calc(${percentage}% - var(--gap, 0px) * ${(100 - percentage) / 100})`,
          };
        }
      }
      return { flex: value };
    },
  });
}
