export const elementIsOfType = ( element, type ) => {
    return (
        (element.type.displayName && element.type.displayName.includes( type )) ||
        (element.type.name && element.type.name.includes( type ))
    );
};
