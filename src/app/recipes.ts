export interface Recipes {
    recipe : {
        label : string,
        image : string,
        url : string, 
        dietLabels : Object,
        healthLabels : Object,
        ingredients : Object
    } [];
}