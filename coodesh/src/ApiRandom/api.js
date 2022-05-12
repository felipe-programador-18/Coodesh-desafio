//create all things need to make search people!!!

export const SearchUser = async() => {
    try {
        let url = `https://randomuser.me/api/?`
        const response = await fetch(url)
        return await response.json()
        
    } catch (error) {
       console.log('error in search, wake please !!', error)
    }
}

export const LimitSearch = async(page=0,results=50) => {
   try {
       let url = `https://randomuser.me/api/?${page}=${results}`
       const response = await fetch(url)
       return await response.json()
   } catch (error) {
       console.log('error fielt search', error)
   }
}

export const GetSearchApiData = async (url) => {
   try { 
       const response = await fetch(url)
       return await response.json()  
   } catch (error) {
       console.log('error here,', error)
   }
}

