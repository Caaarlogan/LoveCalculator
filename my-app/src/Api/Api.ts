const API_BASE_URL = "https://localhost:44368/api/Crush/";

export interface getCrushNameInstancesProps {
    crush_Name: string
}

export const getCrushNameInstances = async ({crush_Name}: getCrushNameInstancesProps) => {
    const response = await fetch(API_BASE_URL + "GetCrushNameInstances?crushName=" + crush_Name, {
        headers: {
            Accept: "application/json",
        },
    }).then((res) => res.json()).then(res => JSON.parse(res));
    
    return response;
}

export const getCrushInstances = async ({ user_Name, crush_Name }: ModifyProps) => {
    const response = await fetch(API_BASE_URL + "GetCrushInstances?userName=" + user_Name + "&crushName=" + crush_Name, {
        headers: {
            Accept: "application/json",
        },
    }).then((res) => res.json()).then(res => JSON.parse(res));
    
    return response;
}

export const getCrushOnUserInstances = async ({crush_Name}: getCrushNameInstancesProps) => {
    const response = await fetch(API_BASE_URL + "getCrushOnUserInstances?crushName=" + crush_Name, {
        headers: {
            Accept: "application/json",
        },
    }).then((res) => res.json()).then(res => JSON.parse(res));
    
    return response;
}

export interface ModifyProps {
    user_Name: string,
    crush_Name: string
}

export const modifyData = async ({ user_Name, crush_Name }: ModifyProps) => {
    const body = JSON.stringify({ user_Name: user_Name, crush_Name: crush_Name});
    await fetch(API_BASE_URL + "UpdateCrush", {
        body,
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
        },
        
        method: "PUT"
    });
}