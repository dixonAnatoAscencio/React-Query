import { githubApi } from "../../api/github.api";
import { sleep } from "../../helpers";
import { GithubIssue } from "../interfaces/issue.interface";


export const getIssue = async ( issueNumber: number): Promise<GithubIssue> => {
  //colocar tipo de dato

  await sleep(1500);

  const { data } = await githubApi.get<GithubIssue>(`/issues/${issueNumber}`); //tipo de dato que se espera

  console.log("data", data);
  return data;
};
