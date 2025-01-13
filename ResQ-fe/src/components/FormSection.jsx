const FormSection = ({
    form,
    handleInputChange,
    createArticle,
    resetForm,
    onCancel,
    title = "Tambah Data Informasi",
    isEditing = false,
}) => {
    return (
        <div className="bg-blue-800 text-white rounded-lg shadow-md p-6 mb-8 transform transition-all hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-white border-b border-blue-600 pb-2">
                {title}
            </h2>
            <form onSubmit={createArticle} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Input Fields */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-white">Judul</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Masukan Judul"
                            value={form.title}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-blue-700 text-white border border-blue-600 rounded focus:ring-2 focus:ring-blue-400 outline-none transition-colors"
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-white">Nama</label>
                        <input
                            type="text"
                            name="author"
                            placeholder="Masukan Nama"
                            value={form.author}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-blue-700 text-white border border-blue-600 rounded focus:ring-2 focus:ring-blue-400 outline-none transition-colors"
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-white">Waktu</label>
                        <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-blue-700 text-white border border-blue-600 rounded focus:ring-2 focus:ring-blue-400 outline-none transition-colors"
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-white">Lokasi</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Masukan Lokasi"
                            value={form.location}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-blue-700 text-white border border-blue-600 rounded focus:ring-2 focus:ring-blue-400 outline-none transition-colors"
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-white">Gambar</label>
                        <input
                            type="text"
                            name="link_img"
                            placeholder="Masukan Link Gambar"
                            value={form.link_img}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-blue-700 text-white border border-blue-600 rounded focus:ring-2 focus:ring-blue-400 outline-none transition-colors"
                            required
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-medium text-white">Deskripsi</label>
                    <textarea
                        name="description"
                        placeholder="Masukan Deskripsi"
                        value={form.description}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-blue-700 text-white border border-blue-600 rounded focus:ring-2 focus:ring-blue-400 outline-none transition-colors h-24 resize-none"
                        required
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-medium text-white">Konten</label>
                    <textarea
                        name="content"
                        placeholder="Masukan Konten"
                        value={form.content}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-blue-700 text-white border border-blue-600 rounded focus:ring-2 focus:ring-blue-400 outline-none transition-colors h-32 resize-none"
                        required
                    />
                </div>
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                    >
                        {isEditing ? 'Edit' : 'Tambah'}
                    </button>
                    <button
                        type="button"
                        onClick={resetForm}
                        className="px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-md"
                    >
                        Ulang
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md"
                    >
                        Batal
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormSection;
