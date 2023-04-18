import { StaticImageData } from 'next/image'
import { Octokit } from '@octokit/rest'
import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'
import apiImage from '../assets/imgs/Untitled.png'
import icarrosImage from '../assets/imgs/icarros_thumb.webp'
import abcBooksImage from '../assets/imgs/abcBooks_thumb.webp'
import bnsImage from '../assets/imgs/bns_thumb.webp'
import mobiltecImage from '../assets/imgs/mobiltec_thumb.webp'
import coopersImage from '../assets/imgs/coopers_thumb.webp'
import blogNovalarImage from '../assets/imgs/blogNovalar_thumb.webp'

export const revalidate = 60

type FetchDataResult = GetResponseDataTypeFromEndpointMethod<
    typeof Octokit.prototype.repos.listForAuthenticatedUser
>

type RepositoryImages = {
    [key: string]: StaticImageData
}

type RepositoryLists = {
    [key: string]: string
}

export default async function fetchData(): Promise<FetchDataResult> {
    try {
        const octokit = new Octokit({
            auth: `token ${process.env.NEXT_PUBLIC_GITHUB_ACCESS}`,
        })

        const { data: repos } =
            await octokit.rest.activity.listReposStarredByAuthenticatedUser()

        console.log(repos)

        const repositoryImages: RepositoryImages = {
            'Leads-API': apiImage,
            API: apiImage,
            'Icarros-Sveltekit': icarrosImage,
            abcbooks: abcBooksImage,
            'BNS-HTML': bnsImage,
            Mobiltec: mobiltecImage,
            Coopers: coopersImage,
            TestBlogNovalar: blogNovalarImage,
        }

        const repositoryLists: RepositoryLists = {
            'Leads-API': 'back-end',
            API: 'back-end',
            'Icarros-Sveltekit': 'web-app',
            abcbooks: 'front-end',
            'BNS-HTML': 'front-end',
            Mobiltec: 'front-end',
            Coopers: 'web-app',
            TestBlogNovalar: 'front-end',
        }

        const reposWithImages = repos.map((repo) => ({
            ...repo,
            imgSrc: repositoryImages[repo.name],
            list: repositoryLists[repo.name],
        }))

        return reposWithImages
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error)
        } else {
            console.log('An unexpected error occurred')
        }
        return []
    }
}
