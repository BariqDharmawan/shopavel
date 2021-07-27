$("#zero_config").DataTable({
    dom: 'Bfrtip',
    buttons: [
        {
            extend: 'collection',
            text: 'Download Data',
            buttons: ['pdf', 'excel']
        }
    ]
})