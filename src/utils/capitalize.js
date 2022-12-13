function capitalize(string) {
  
  const lowercasedString = string.toLowerCase()

  return lowercasedString[0].toUpperCase() + lowercasedString.slice(1).toLowerCase();
}

export default capitalize