import { prisma } from "../client";
import { Response, Request } from "express";

// for get request
export const getGadget = async (_: Request, res: Response): Promise<void> => {
    try {
        const all_data = await prisma.gadget.findMany();
        res.status(200).json(all_data);
    } catch (e: any) {
        res.status(500).json("Internal Server Error");
    }
};

// for post request

/*
    • See whether the data already exists in the database. if yes, return
    • Else create  a new record
*/
export const postGadget = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { name, status } = req.body;
    try {
        const alreadyPresent = await prisma.gadget.findFirst({
            where: {
                name,
            },
        });
        if (alreadyPresent) {
            res.status(403).json("Name already Exists !!");
        } else {
            try {
                await prisma.gadget.create({
                    data: {
                        name,
                        status,
                    },
                });
                res.status(200).json("Gadget added successfully !!");
            } catch (error) {
                console.log(error);
                res.status(400).json(
                    "Make sure the Status is selected from avaiable options"
                );
            }
        }
    } catch (e) {
        console.log(e);
        res.status(500).json("Server Error while Creating a new gadget");
    }
};

// for patch request

/*
    • Check whether the data exists with the ID or not. If no, return
    • Check whether the status for that data is Decommissioned or not. if yes, return
    • Create a new object and store the data the user provide it can be only one pair or two
    • Update it 
*/
export const patchGadget = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = req.params;
    try {
        const available = await prisma.gadget.findFirst({
            where: {
                id: id.id,
            },
        });
        if (!available) {
            res.status(204).json("No Gadget Exists with this ID");
        } else {
            if(available.status==="DeCommissioned"){
                res.status(403).json(`This Gadget is Decommissioned on ${available.deCommissionedTime} and hence cannot be updated`)
            }
            const { ...rest } = req.body;
            if (Object.keys(rest).length === 0) {
                res.status(400).json("Provide data to update");
            }
            const newObject: Record<string, any> = {};
            if (rest.name !== undefined) newObject.name = rest.name;
            if (rest.status !== undefined) newObject.status = rest.status;

            try {
                await prisma.gadget.update({
                    where: {
                        id: id.id,
                    },
                    data: newObject,
                });
                res.status(200).json("Gadget updated successfully !!");
            } catch (error) {
                res.status(500).json(
                    "Error while updating the gadget. Make sure the fields are correct"
                );
            }
        }
    } catch (e) {
        res.status(500).json("Server Error while updating the gadget");
    }
};

// for delete rquest

/*
    • Check whether data with this ID exists or not, If not, return
    • Check whether the satus of data is Decommisioned or not, If yes, reutrn
    • update with timestamp

*/
export const deleteGadget = async (req: Request, res: Response): Promise<void> => {
    const id = req.params
    if (!id) {
        res.status(403).json("To delete a gadget, an ID is mandatory")
    }
    try {
        const findTheData = await prisma.gadget.findFirst({
            where: {
                id: id.id
            }
        })
        if (!findTheData) {
            res.status(400).json("Gadget with this ID does not exists !! ")
        }
        if(findTheData?.status==="DeCommissioned"){
            res.status(403).json("Gadget already Decommissioned")
        }
        await prisma.gadget.update({
            where: {
                id: id.id
            },
            data:{
                status:"DeCommissioned",
                deCommissionedTime:new Date()
            }
        })
        res.status(200).json("Gadget Deleted successfully !!")
    } catch (e) {
        res.status(500).json("Server Error while deleting the gadget")
    }
};

// to delete a speicfic data
export const selfDestruct = async () => { };
