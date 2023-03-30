import { werify } from './../index';
import { expect, test } from 'vitest'

const authService = werify()

test('is base url defined', () => {
    expect(authService.config.baseURL).toBeDefined()
})
