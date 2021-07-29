import axios from 'axios';


const url = 'https://api.github.com'
const githubtoken = process.env.GITHUB_TOKEN

//https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}


export const fetchIssues = async () =>{
    return await axios.get(
        `${url}/search/issues?q={react}&page, per_page=100&page_number=1`,
        {
            headers : {
                Authorization : `token ${githubtoken}`
            }
        }
    );


};

export const getIssues = async () =>{
    const issues = await fetchIssues();
    return issues.data.items

};

export const fetchIssuesReadme = async (urlIssue) =>{
    return await axios.get(`${urlIssue}/readme`)
};

export const renderIssueReadme = async (urlReadMe) =>{
    return await axios.get(urlReadMe)

};


export const getComments = async (urlComments) =>{
    return await axios.get(urlComments)

};
