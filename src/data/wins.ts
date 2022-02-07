function possibleWins(actions: any, player: any) {
  const actionButtons: any[] = actions.map((action: any) => {
    const btn = action.button.split("-");
    const btnId = btn[1];

    if (action.value === player) {
      return btnId;
    }
    return null;
  });

  if (
    actionButtons.includes("1") &&
    actionButtons.includes("4") &&
    actionButtons.includes("7")
  ) {
    return "win";
  }

  if (
    actionButtons.includes("1") &&
    actionButtons.includes("2") &&
    actionButtons.includes("3")
  ) {
    return "win";
  }

  if (
    actionButtons.includes("2") &&
    actionButtons.includes("5") &&
    actionButtons.includes("8")
  ) {
    return "win";
  }

  if (
    actionButtons.includes("3") &&
    actionButtons.includes("6") &&
    actionButtons.includes("9")
  ) {
    return "win";
  }

  if (
    actionButtons.includes("4") &&
    actionButtons.includes("5") &&
    actionButtons.includes("6")
  ) {
    return "win";
  }

  if (
    actionButtons.includes("7") &&
    actionButtons.includes("8") &&
    actionButtons.includes("9")
  ) {
    return "win";
  }
  return actionButtons;
}

export default possibleWins;
