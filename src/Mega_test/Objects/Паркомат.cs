﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Mega_test
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Паркомат.
    /// </summary>
    // *** Start programmer edit section *** (Паркомат CustomAttributes)

    // *** End programmer edit section *** (Паркомат CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПаркоматE", new string[0])]
    [View("ПаркоматL", new string[] {
            "ID2 as \'ID\'",
            "ВреОпл as \'Время оплаты\'",
            "СвМеста as \'Свободные места\'",
            "СтатОпл as \'Статус оплаты\'",
            "СтоимПарк as \'Стоимость парковки\'"})]
    public class Паркомат : ICSSoft.STORMNET.DataObject
    {
        
        private int fID2;
        
        private int fСвМеста;
        
        private System.DateTime fВреОпл;
        
        private string fСтатОпл;
        
        private int fСтоимПарк;
        
        // *** Start programmer edit section *** (Паркомат CustomMembers)

        // *** End programmer edit section *** (Паркомат CustomMembers)

        
        /// <summary>
        /// ID2.
        /// </summary>
        // *** Start programmer edit section *** (Паркомат.ID2 CustomAttributes)

        // *** End programmer edit section *** (Паркомат.ID2 CustomAttributes)
        public virtual int ID2
        {
            get
            {
                // *** Start programmer edit section *** (Паркомат.ID2 Get start)

                // *** End programmer edit section *** (Паркомат.ID2 Get start)
                int result = this.fID2;
                // *** Start programmer edit section *** (Паркомат.ID2 Get end)

                // *** End programmer edit section *** (Паркомат.ID2 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Паркомат.ID2 Set start)

                // *** End programmer edit section *** (Паркомат.ID2 Set start)
                this.fID2 = value;
                // *** Start programmer edit section *** (Паркомат.ID2 Set end)

                // *** End programmer edit section *** (Паркомат.ID2 Set end)
            }
        }
        
        /// <summary>
        /// ВреОпл.
        /// </summary>
        // *** Start programmer edit section *** (Паркомат.ВреОпл CustomAttributes)

        // *** End programmer edit section *** (Паркомат.ВреОпл CustomAttributes)
        public virtual System.DateTime ВреОпл
        {
            get
            {
                // *** Start programmer edit section *** (Паркомат.ВреОпл Get start)

                // *** End programmer edit section *** (Паркомат.ВреОпл Get start)
                System.DateTime result = this.fВреОпл;
                // *** Start programmer edit section *** (Паркомат.ВреОпл Get end)

                // *** End programmer edit section *** (Паркомат.ВреОпл Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Паркомат.ВреОпл Set start)

                // *** End programmer edit section *** (Паркомат.ВреОпл Set start)
                this.fВреОпл = value;
                // *** Start programmer edit section *** (Паркомат.ВреОпл Set end)

                // *** End programmer edit section *** (Паркомат.ВреОпл Set end)
            }
        }
        
        /// <summary>
        /// СвМеста.
        /// </summary>
        // *** Start programmer edit section *** (Паркомат.СвМеста CustomAttributes)

        // *** End programmer edit section *** (Паркомат.СвМеста CustomAttributes)
        public virtual int СвМеста
        {
            get
            {
                // *** Start programmer edit section *** (Паркомат.СвМеста Get start)

                // *** End programmer edit section *** (Паркомат.СвМеста Get start)
                int result = this.fСвМеста;
                // *** Start programmer edit section *** (Паркомат.СвМеста Get end)

                // *** End programmer edit section *** (Паркомат.СвМеста Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Паркомат.СвМеста Set start)

                // *** End programmer edit section *** (Паркомат.СвМеста Set start)
                this.fСвМеста = value;
                // *** Start programmer edit section *** (Паркомат.СвМеста Set end)

                // *** End programmer edit section *** (Паркомат.СвМеста Set end)
            }
        }
        
        /// <summary>
        /// СтатОпл.
        /// </summary>
        // *** Start programmer edit section *** (Паркомат.СтатОпл CustomAttributes)

        // *** End programmer edit section *** (Паркомат.СтатОпл CustomAttributes)
        [StrLen(255)]
        public virtual string СтатОпл
        {
            get
            {
                // *** Start programmer edit section *** (Паркомат.СтатОпл Get start)

                // *** End programmer edit section *** (Паркомат.СтатОпл Get start)
                string result = this.fСтатОпл;
                // *** Start programmer edit section *** (Паркомат.СтатОпл Get end)

                // *** End programmer edit section *** (Паркомат.СтатОпл Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Паркомат.СтатОпл Set start)

                // *** End programmer edit section *** (Паркомат.СтатОпл Set start)
                this.fСтатОпл = value;
                // *** Start programmer edit section *** (Паркомат.СтатОпл Set end)

                // *** End programmer edit section *** (Паркомат.СтатОпл Set end)
            }
        }
        
        /// <summary>
        /// СтоимПарк.
        /// </summary>
        // *** Start programmer edit section *** (Паркомат.СтоимПарк CustomAttributes)

        // *** End programmer edit section *** (Паркомат.СтоимПарк CustomAttributes)
        public virtual int СтоимПарк
        {
            get
            {
                // *** Start programmer edit section *** (Паркомат.СтоимПарк Get start)

                // *** End programmer edit section *** (Паркомат.СтоимПарк Get start)
                int result = this.fСтоимПарк;
                // *** Start programmer edit section *** (Паркомат.СтоимПарк Get end)

                // *** End programmer edit section *** (Паркомат.СтоимПарк Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Паркомат.СтоимПарк Set start)

                // *** End programmer edit section *** (Паркомат.СтоимПарк Set start)
                this.fСтоимПарк = value;
                // *** Start programmer edit section *** (Паркомат.СтоимПарк Set end)

                // *** End programmer edit section *** (Паркомат.СтоимПарк Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПаркоматE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПаркоматE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПаркоматE", typeof(IIS.Mega_test.Паркомат));
                }
            }
            
            /// <summary>
            /// "ПаркоматL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПаркоматL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПаркоматL", typeof(IIS.Mega_test.Паркомат));
                }
            }
        }
    }
}
