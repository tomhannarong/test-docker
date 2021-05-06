
import jwt from "jsonwebtoken";

export const signAccessToken = (userId: string, tokenVersion: number) =>
    jwt.sign({ userId, tokenVersion }, process.env.ACESS_TOKEN_SECRET!, { expiresIn: 20 })

export const signRefreshToken = (userId: string, tokenVersion: number) =>
    jwt.sign({ userId, tokenVersion }, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '30d' })


export const verifyAcessToken = (token: string) => jwt.verify(token, process.env.ACESS_TOKEN_SECRET!)

export const verifyRefreshToken = (token: string) => jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!)