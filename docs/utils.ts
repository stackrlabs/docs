export const getRegex = (paramType: string) => {
  switch (paramType) {
    case "address":
      return /^0x[a-fA-F0-9]{40}$/;
    case "uint256":
      return /^[0-9]+$/;
    case "string":
      return /^.*$/;
    case "bool":
      return /^(true|false)$/;
    default:
      return /^.*$/;
  }
};
