export interface LocationProps {
    location : {
        hash : string | undefined
        pathname : string | undefined,
        search : string | undefined,
        state : string | undefined,
    } | undefined
}

export interface MatchProps{
    match : {
        isExact : boolean | undefined,
        params : any | undefined,
        path : string | undefined,
        url : string | undefined
    } | undefined
}
