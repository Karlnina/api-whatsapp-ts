import { file } from "../domain/media";

export default interface LeadExternal {
    sendMsg({ message, phone }: { message: string, phone: string }): Promise<any>
    sendMedia({ media, phone }: { media: file, phone: string }): Promise<any>
}