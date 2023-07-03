import * as z from 'zod';
import AddPlaylistFormFieldName from 'models/emuns/addPlaylistFormFieldName';
import ErrorMessageDialogAddPlaylist from './errorMessage';

const AddOrUpdatePlaylistSchema = z.object({
    [AddPlaylistFormFieldName.name]: z
        .string()
        .min(2, { message: ErrorMessageDialogAddPlaylist.playlistNameMin })
        .max(50, ErrorMessageDialogAddPlaylist.playlistNameMax),
    [AddPlaylistFormFieldName.songs]: z.array(z.string()).nonempty({
        message: ErrorMessageDialogAddPlaylist.requiredError,
    }),
});

export type AddOrUpdatePlaylistForm = z.infer<typeof AddOrUpdatePlaylistSchema>;
export default AddOrUpdatePlaylistSchema;
