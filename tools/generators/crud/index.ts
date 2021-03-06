import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit'
import { readJsonSync } from 'fs-extra'
import { join } from 'path'
import * as process from 'process'

export default async function (
  host: Tree,
  {
    name,
    model,
    nameField,
    plural,
    dryRun,
  }: {
    name: string
    model: string
    nameField: string
    plural: string
    dryRun: boolean
  },
) {
  console.log('yarn nx g @nxpm/stack:api-crud ${name} ')
  console.log('yarn prisma:apply')
  console.log('yarn nx g @nxpm/stack:web-crud ${name} ')
  console.log('yarn build:sdk ')
  console.log({ name, model, nameField, plural, dryRun })
}
