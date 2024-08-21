import { githubApi } from "../../api/github.api";
import { sleep } from "../../helpers";
import { GithubIssue } from "../interfaces/issue.interface";


export const getIssues = async (): Promise<GithubIssue[]> => {
  //colocar tipo de dato

  await sleep(1500);

  const { data } = await githubApi.get<GithubIssue[]>("/issues"); //tipo de dato que se espera

  return data;
};
