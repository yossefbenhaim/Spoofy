import * as z from 'zod';
import { AddPlaylistFormFieldName } from 'models/enums/addPlaylistFormFieldName';
import ErrorMessageDialogAddPlaylist from './errorMessage';

const GenericPlaylistDialogSchema = z.object({
    [AddPlaylistFormFieldName.name]: z
        .string()
        .min(2, { message: ErrorMessageDialogAddPlaylist.playlistNameMin })
        .max(50, ErrorMessageDialogAddPlaylist.playlistNameMax),
    [AddPlaylistFormFieldName.songs]: z.array(z.string()).nonempty({
        message: ErrorMessageDialogAddPlaylist.requiredError,
    }),
});

export type GenericPlaylistDialogForm = z.infer<
    typeof GenericPlaylistDialogSchema
>;
export default GenericPlaylistDialogSchema;
