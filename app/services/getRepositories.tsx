import { StaticImageData } from 'next/image'
import { Octokit } from '@octokit/rest'
import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'
import apiImage from '../../public/imgs/Untitled.png'
import icarrosImage from '../../public/imgs/icarros_thumb.webp'
import abcBooksImage from '../../public/imgs/abcBooks_thumb.webp'
import bnsImage from '../../public/imgs/bns_thumb.webp'
import mobiltecImage from '../../public/imgs/mobiltec_thumb.webp'
import coopersImage from '../../public/imgs/coopers_thumb.webp'
import blogNovalarImage from '../../public/imgs/blogNovalar_thumb.webp'

export type FetchDataResult = GetResponseDataTypeFromEndpointMethod<
    typeof Octokit.prototype.repos.listForAuthenticatedUser
>

type RepositoryImages = {
    [key: string]: StaticImageData
}

type RepositoryCategories = {
    [key: string]: string
}

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

const repositoryCategories: RepositoryCategories = {
    'Leads-API': 'back-end',
    API: 'back-end',
    'Icarros-Sveltekit': 'web-app',
    abcbooks: 'front-end',
    'BNS-HTML': 'front-end',
    Mobiltec: 'front-end',
    Coopers: 'web-app',
    TestBlogNovalar: 'front-end',
}

export default async function getRepositories(): Promise<FetchDataResult> {
    try {
        const octokit = new Octokit({
            auth: `token ${process.env.NEXT_PUBLIC_GITHUB_ACCESS}`,
        })

        const { data: repos } =
            await octokit.rest.activity.listReposStarredByAuthenticatedUser()

        const reposWithImages = repos.map((repo) => ({
            ...repo,
            imgSrc: repositoryImages[repo.name],
            categorie: repositoryCategories[repo.name],
        }))

        return reposWithImages
    } catch (error) {
        // Handle the error here, e.g., logging it or re-throwing it
        console.error('Error fetching repositories:', error)
        throw error
    }
}
