// JavaScript source code
define({
    
    map: true,
    mapClickMode: true,
    mapRightClickMenu: true,
    identifyLayerInfos: true,
    identifyTolerance: 5,
    
    identifies: {
        MARTAProjects: {
            0: {
                title: "MARTA Property",
            
                fieldInfos: [
                    { fieldName: "relationships/0/OBJECTID", label: "# of Property Deed", statisticType: "count", visible: true },
                    { fieldName: "relationships/0/DocumentURL", label: "Filename", visible: false },
                    { fieldName: "MARTA_Parcel_ID", label: "MARTA Parcel ID", visible: true },
                    { fieldName: "OwnershipType", label: "Ownership Type", visible: true },
                    { fieldName: "PropertyOwner", label: "Property Owner", visible: true },
                    { fieldName: "CountyParcel_ID", label: "County Parcel ID", visible: true },
                    { fieldName: "CountyAddress", label: "County Address", visible: true },
                    { fieldName: "County", label: "County", visible: true },
                    { fieldName: "CCU", label: "CCU", visible: true },
                    { fieldName: "BookPage", label: "Book Page", visible: true },
                    { fieldName: "LeaseTenant", label: "Leased Tenant", visible: true },
                    { fieldName: "LeaseType", label: "Type of Lease", visible: true },
                    { fieldName: "LeaseExpiration", label: "Lease Expiration", visible: true },
                    { fieldName: "LeaseARNumber", label: "Lease AR Number", visible: true },
                    { fieldName: "LeaseAccountCode", label: "Lease Account Code", visible: true },
                    { fieldName: "FTA_Interest", label: "FTA Interest?", visible: true },
                    { fieldName: "FTA_Funds", label: "FTA Funds", visible: true },
                    { fieldName: "TotalAppraisal", label: "Total Appraisal", visible: true },
                    { fieldName: "TotalAssessment", label: "Total Assessment", visible: true },
                    { fieldName: "TaxYear", label: "Tax Year", visible: true },
                    { fieldName: "Disposed", label: "Disposed", visible: true },
                    { fieldName: "LandUse", label: "LandUse", visible: true },
                    { fieldName: "Acreage", label: "Acreage", visible: true },
                    { fieldName: "LegalBox", label: "Legal Box", visible: true },
          
                ],           
            }
        }, 
}
});
