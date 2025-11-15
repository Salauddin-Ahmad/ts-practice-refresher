// type UserRoles = "Admin" | "Editor" | "Viewer" // instead we can write this as an enum


enum  UserRoles {
Admin = "Admin",
Editor = 'Editor',
Viewer = 'Viewer'
}




const canEdit = (role: UserRoles) => {
    if (role === UserRoles.Admin|| role === UserRoles.Editor){
        return true
    }
    return false
}

const isEditPermissable = canEdit(UserRoles.Admin);

console.log(isEditPermissable)