import { Context, Schema } from 'koishi'

export const name = 'boom'

export const Config: Schema<{}> = Schema.object({})

export function apply(ctx: Context) {}

process.exit(0)
