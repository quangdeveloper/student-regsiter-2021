export const formatterDateDD_MM_YYYY = () => {
    return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'});
}

export const formatterDateHH_MM_SS = () => {
    return new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
}
