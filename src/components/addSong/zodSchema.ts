import * as z from 'zod';
import DialogFieldsNames from 'models/emuns/dialogFieldsName';
import ErrorMessageDialogAddSong from 'models/emuns/errorMessage';

const Schema = z.object({
    [DialogFieldsNames.name]: z
        .string()
        .nonempty({
            message: ErrorMessageDialogAddSong.requiredError,
        })
        .min(2, { message: ErrorMessageDialogAddSong.songNameMin })
        .max(50, ErrorMessageDialogAddSong.songNameMax),
    [DialogFieldsNames.artist]: z
        .string({ required_error: ErrorMessageDialogAddSong.requiredError })
        .nonempty({
            message: ErrorMessageDialogAddSong.requiredError,
        }),
    [DialogFieldsNames.duration]: z
        .number({ invalid_type_error: ErrorMessageDialogAddSong.duration })
        .min(20, { message: ErrorMessageDialogAddSong.duration }),
});

export default Schema;
