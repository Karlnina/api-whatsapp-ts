export default interface LeadExternal {
    sendMsg({ message, phone }: { message: string, phone: string }): Promise<any>
    sendMedia({ media, phone }: { media: string, phone: string }): Promise<any>
}