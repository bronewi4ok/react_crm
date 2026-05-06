import {
  createSerializer,
  useQueryStates,
  type ParserMap,
  type UrlKeys,
  type inferParserType,
} from 'nuqs'

export function useQueryParams<TParsers extends ParserMap>(
  schema: TParsers,
  urlKeys: UrlKeys<TParsers>,
) {
  const [params, setParams] = useQueryStates(schema, { urlKeys, shallow: false })
  const serializer = createSerializer(schema, { urlKeys })

  const buildLink = (updates: Partial<inferParserType<TParsers>>) => {
    return serializer({ ...params, ...updates })
  }

  return {
    params,
    setParams,
    buildLink,
  }
}
