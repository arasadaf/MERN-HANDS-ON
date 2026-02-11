// Validate task title (not empty, min 3 chars)
export function validateTitle(title) 
{
    if(title.length===0)
    {
        return "Title is empty"
    }
    if (title.length<3)
    {
        return "Title should have min of 3 characters"
    }
    return true;
}
//Validate priority (must be: low, medium, high)
export function validatePriority(priority)
{
   if (priority ==="low" || priority==="medium" || priority==="high")
   {
    return true
   }
   else
   {
    return "invalid priority"
   }
}

//Validate due date (must be future date)
export function validateDueDate(date) 
{
    let today=new Date();
    let d=new Date(date)
    if (today<d)
    {
        return true
    }
    else
    {
        return "Due date is completed"
    }
}
