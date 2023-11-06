import { Request, Response } from "express";
import { LeadCreate } from "../../application/lead.create";


class LeadCtrl {
  constructor(private readonly leadCreator: LeadCreate) { }

  public sendCtrl = async ({ body }: Request, res: Response) => {
    const { message, phone } = body;
    const response = await this.leadCreator.sendMessageAndSave({ message, phone })
    res.send(response);
  };

  public sendMedia = async ({ body, file }: Request, res: Response) => {
    const { message, phone } = body;
    const media = file?.buffer.toString('base64') ?? '';
    const response = await this.leadCreator.sendMedia({ media, phone })
  };
}

export default LeadCtrl;
