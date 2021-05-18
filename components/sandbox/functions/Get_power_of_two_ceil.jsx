export default {
  javascript: `const get_power_of_two_ceil = (x) => {
      if (x <= 1) {
          return 1
      } else if (x == 2) {
          return 2
      } else {
          return 2 * get_power_of_two_ceil(Math.floor((x + 1) / 2))
      };
  };
    `,
  python: `def get_power_of_two_ceil(x):
  if x <= 1:
      return 1
  elif x == 2:
      return 2
  else:
      return 2 * get_power_of_two_ceil((x + 1) // 2)
    `,
  typescript: `function get_power_of_two_ceil(x: number): number {
    if (x <= 1) {
        return 1
    } else if (x == 2) {
        return 2
    } else {
        return 2 * get_power_of_two_ceil(Math.floor((x + 1) / 2))
    };
};
    `,
};
